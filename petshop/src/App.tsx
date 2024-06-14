import NavBar from './components/NavBar';
import PetshopLogo from './assets/PetshopLogo.jpg';
import PetshopForm from './components/PetshopForm';

function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <NavBar />
            <div className="flex flex-1 flex-col items-center justify-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
                <img
                    src={PetshopLogo}
                    alt="LOGO"
                    className="w-full max-w-xs sm:max-w-md md:w-96 lg:max-w-7xl"
                />
                <PetshopForm />
                
            </div>
        </div>
    );
}

export default App;
