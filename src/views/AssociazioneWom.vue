<template>
    <div id="associazioneWom">
        <div class="backBtn"><router-link to="/"><img :src="require('@/assets/icons/previous.png')" alt=""><span>BACK</span> </router-link></div>

        <div class="logo">
            <img :src="require('../assets/partners/wom.png')" alt="">
        </div>

        <h2>L'ASSOCIAZIONE</h2>
        <p>L’associazione WOM è un ente nato a Lucca nel 2016 e successivamente diventato APS con costituzione tramite atto pubblico. Si occupa di promuovere la conoscenza della musica, in particolare quella contemporanea, all’interno del proprio territorio e in generale quello toscano. Tra gli eventi che ha promosso, quello principale, è il festival della musica contemporanea WØM FEST che si svolge con successo dal 2017 presso il suggestivo parco di Villa Bottini nel centro storico di Lucca.
        </p>

        <h3 style="margin-top: 40px">A.P.S. WOM - PI: 02462960465 CF: 92063320466 <br> ELENCO CONTRIBUTO per “Criterio di Cassa” ANNO 2020/2021</h3>
        <table>
            <thead>
                <tr>
                    <th>SOGGETTO EROGANTE</th>
                    <th>SOMMA INCASSATA</th>
                    <th>DATA INCASSO</th>
                    <th>MOTIVAZIONE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="nome">Comune di Lucca</td>
                    <td class="importo">2.440,00€</td>
                    <td class="data">09/09/2020</td>
                    <td class="desc">Rassegna musicale Concerti da casa mandato 9914- 1-2020</td>
                </tr>
                <tr>
                    <td class="nome">Comune di Lucca</td>
                    <td class="importo">25.000,00€</td>
                    <td class="data">09/10/2020</td>
                    <td class="desc">CONTRIBUTO X LUCCA RISUONA MANDATO 11281- 1-2020</td>
                </tr>
                <tr>
                    <td class="nome">Ag.Entrate</td>
                    <td class="importo">2.000,00€</td>
                    <td class="data">18/11/2020</td>
                    <td class="desc">Contributo ART. 25 DL N. 34 DEL 2020</td>
                </tr>
                <tr>
                    <td class="nome">Ag.Entrate</td>
                    <td class="importo">4.000,00€</td>
                    <td class="data">26/11/2020</td>
                    <td class="desc">Contributo ART. 1 DL N. 137 DEL 2020</td>
                </tr>
                <tr>
                    <td class="nome">Ag.Entrate</td>
                    <td class="importo">2.000,00€</td>
                    <td class="data">25/05/2021</td>
                    <td class="desc">Contributo ART. 1 DL N. DEL 2021</td>
                </tr>
                <tr>
                    <td class="nome">Comune di Lucca</td>
                    <td class="importo">10.000,00€</td>
                    <td class="data">04/06/2021</td>
                    <td class="desc">Contributo per l’evento Concerto 25 Aprile di Lucca</td>
                </tr>
                <tr>
                    <td class="nome">Ag.Entrate</td>
                    <td class="importo">2.000,00€</td>
                    <td class="data">24/06/2021</td>
                    <td class="desc">Contributo ART. 1 CO. 1 DL N. 73 DEL 2021</td>
                </tr>
                <tr>
                    <td class="nome">MIBACT</td>
                    <td class="importo">4.535,20€</td>
                    <td class="data">21/12/2021</td>
                    <td class="desc">Contributo COVID - DM 188 2021</td>
                </tr>
                <tr>
                    <td class="nome">MIBACT</td>
                    <td class="importo">110,90€</td>
                    <td class="data">13/12/2021</td>
                    <td class="desc">DM 107 ART. 3</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style lang="scss" scoped>
#associazioneWom{
    color: white;
    max-width: 900px;
    margin: 0 auto;
    font-size: 10pt;
    position: relative;
    padding: 0px 20px;
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    @media screen and (max-width: 405px) {
        padding: 0px 10px;
    }
}
.backBtn{
    position: absolute;
    top:20px;
    left:20px;
    img{
        width: 20px;
        transition-duration: 0.2s;
    }
    span{
        position: absolute;
        top:45%;
        transform: translateY(-50%);
        left: 25px;
        font-weight: 800;
        transition-duration: 0.2s;
    }
    a{
        &:hover{
            img{transform: scale(1.1);transition-duration: 0.2s;}
            span{font-size: 12pt;transition-duration: 0.2s;}
        }
    }
}

table{
    border: 1px solid white;
    border-radius: 5px;
    margin-top: 10px;
    border-collapse: collapse;
    @media screen and (max-width: 640px) {
        font-size: 9pt;
    }
    @media screen and (max-width: 522px) {
        font-size: 8pt;
    }
    @media screen and (max-width: 405px) {
        font-size: 7pt;
    }
    thead{
        tr{
            
            th{
                border-bottom: 1px solid white;     
                padding: 10px;
                @media screen and (max-width: 405px) {
                    padding: 5px;
                }
            }
               
        }
    }
    tbody{
        tr{
            td{
                border-right: 1px solid white;
                text-align: center;
                padding: 2px 5px;
                @media screen and (max-width: 405px) {
                    padding: 1px 2px;
                }
            }
            .desc{
                text-transform: uppercase;
            }
        }
    }
}

.logo{
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    margin-bottom: 30px;
    img{
        width: 100%;
    }
}
</style>