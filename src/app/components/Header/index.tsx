import "./style.css"

const Header = () => {
    return(
        <>
            <header className="flex  items-center justify-center bg-[#1a1d29] text-[#f9f9f9] h-[150px]" id="Header">
                <a className="flex-auto ml-[20px]" href=""><img className="w-[200px] hover:w-[220px] transition-all" id="DisneyPLusLogo" src="/img/disney-plus-logo-1.png"></img></a>
                <div className="flex-auto justify-center">
                    <p>Bem-vindo ao Disney PLus</p>
                </div>
            </header>
        </>
    );
};

export default Header;