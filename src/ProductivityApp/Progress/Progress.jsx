import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAndUpdateProgress, updateProgressLocal } from '../../Store/progressSlice';
import ProgressChart from './ProgressChart';
import appwriteService from '../../Appwrite/progresConf';
import { Box, Typography, CircularProgress, Alert, Select, MenuItem, FormControl, InputLabel, useMediaQuery } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { chatsCount } from '../../Store/aiSlice';

const Progress = ({ userId }) => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.progress);
    const notesCount = useSelector(state => state.notes.length);
    const { networth, debit, credit } = useSelector((state) => state.finance);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [chartType, setChartType] = useState('line');
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        dispatch(fetchAndUpdateProgress());

        const unsubscribe = appwriteService.subscribeToProgress(userId, (response) => {
            if (response.events.includes('databases.*.collections.*.documents.*.create') ||
                response.events.includes('databases.*.collections.*.documents.*.update')) {
                dispatch(updateProgressLocal(response.payload));
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch, userId]);

    useEffect(() => {
        dispatch(fetchAndUpdateProgress());
    }, [dispatch, notesCount, networth, debit, credit]);

    const processedData = useMemo(() => {
        return data
            .filter(item => {
                const itemDate = new Date(item.date);
                return itemDate >= dateRange[0].startDate && itemDate <= dateRange[0].endDate;
            })
            .map(item => ({
                date: item.date,
                notesCount: item.notesCount || 0,
                financialProgress: (item.credit || 0) - (item.debit || 0),
                chatsCount: item.chatsCount || 0
            }));
    }, [data, dateRange]);

    const handleDateRangeChange = (item) => {
        setDateRange([item.selection]);
    };

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
    };

    if (status === 'loading') return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;
    if (status === 'failed') return <Alert severity="error">Error: {error}</Alert>;

    return (
        <Box className="p-4">
            <Typography variant="h4" gutterBottom>Your Progress</Typography>
            
            <Box 
                display="flex" 
                flexDirection={isMobile ? 'column' : 'row'} 
                justifyContent="space-between" 
                alignItems={isMobile ? 'stretch' : 'center'} 
                mb={2}
                gap={2}
            >    
            <div className='w-full overflow-x-auto'>
                <Box 
                    sx={{
                        '.rdrCalendarWrapper': {
                            fontSize: isMobile ? '12px' : '16px',
                            width: isMobile ? 'auto' : 'auto',
                        },
                        '.rdrDateDisplayWrapper': {
                            background: 'none',
                        },
                        '.rdrDateDisplay': {
                            display: isMobile ? 'none' : 'flex',
                        },
                    }}
                >
                    <DateRangePicker
                        onChange={handleDateRangeChange}
                        ranges={dateRange}
                        direction={isMobile ? 'vertical' : 'horizontal'}
                    />
                </Box>
            </div>  
                <FormControl sx={{ minWidth: 120, width: isMobile ? '100%' : 'auto' }} size="small">
                    <InputLabel>Chart Type</InputLabel> 
                    <Select
                        value={chartType}
                        onChange={handleChartTypeChange}
                        label="Chart Type"
                    >
                        <MenuItem value="line">Line</MenuItem>
                        <MenuItem value="bar">Bar</MenuItem>
                        <MenuItem value="radar">Radar</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <ProgressChart data={processedData} chartType={chartType} />

            <Box mt={4}>
                <Typography variant="h6">Summary</Typography>
                <Typography>
                    Total Notes: {notesCount || 0}
                </Typography>
                <Typography>
                    Total Chats: {chatsCount || 0}
                </Typography>
                <Typography>
                    Financial Progress: ${networth.toFixed(2)}
                </Typography>
            </Box>
        </Box>
    );
};

export default Progress;