import {Signup, Navbar, Footer} from '../index'

function SignupLayout() {
    return (
        <>
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
            <Signup />
            </main>
            <Footer />
        </>
    )
}

export default SignupLayout