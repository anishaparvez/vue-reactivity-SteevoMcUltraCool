let MOD = {

}
MOD.toString = function(favArr){
    return favorites.reduce((Sn,an) =>{
     Sn += `${an.name.toLowerCase()}${an.count}`     
    },"")
}
MOD.toArray = function(favStr){
    let ChPi = []
    ChPi[0]=["pawn",favStr.search("pawn")]
    ChPi[1]=[ "knight", favStr.search("knight")]
    ChPi[2]=[ "bishop", favStr.search("bishop")]
    ChPi[3]=[ "rook", favStr.search("rook")]
    ChPi[4]=[ "queen", favStr.search("queen")]
    ChPi[5]=[ "king", favStr.search("king")]
    return ChPi.reduce((a,b)=>{(Sn,an)},[])
}
export default MOD