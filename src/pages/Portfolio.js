import Cripto from "../components/Cripto";
import P2P from "../components/P2P";
import Stock from "../components/Stock";

function Portfolio() {
    return(
    <div class="app">
        <P2P />
        <Cripto />
        <Stock />
    </div>
    )
}

export default Portfolio;