const CardFilm = (props) => {
    return(
        <>
            <div className="flex flex-col items-center m-3">
                <p className="text-center text-lg font-bold">{props.title}</p>
                <img className="w-[200px] rounded-lg hover:w-[220px] transition-all" src={props.image} ></img>
                <a href={props.link}>
                <button className="p-2 m-5 bg-[#2D7CF2] hover:bg-[#0040E5] rounded-lg font-bold text-[#f9f9f9] transition-all">Veja o trailer!</button >
                </a>
            </div>
        </>
    );
}

export default CardFilm;