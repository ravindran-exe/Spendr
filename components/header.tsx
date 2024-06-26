import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
    const user = await checkUser();
    return ( <nav className="navbar">
        <div className="navbar-container">
            <h2>Spendr</h2>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </nav> );
}
 
export default Header;