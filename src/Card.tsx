interface cardprops{
    clk:()=>void,
    imgurl:string,
    text:string
}

export const Card:React.FC<cardprops> = (props:cardprops) => {
    return(
        <p className="line" onClick={props.clk}>
            <img src={props.imgurl} alt="temp" width={"150"}/>
            <span className="listtext">{props.text}</span>
        </p>
    );
}