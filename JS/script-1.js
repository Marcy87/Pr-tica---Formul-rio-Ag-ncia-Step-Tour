document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM carregado totalmente.");


    //CHECKBOX ACOMPANHANTE
    const msnspan = document.getElementById("menspan");
    msnspan.innerHTML = "";

    const checkbox = document.getElementById("acompanhantes");

    checkbox.addEventListener("click", function funcaoqtdacomp() {
        if (document.getElementsByName("acompanhantes")[0].checked == false) {
            msnspan.innerHTML = "";
        } else {
            msnspan.innerHTML = "<input type=number name=qtdpes id=qtdpes>";
        }
    });


    // PASSEIOS ESCOLHIDOS:
    // 1° opção
    const pasEsc1 = document.getElementById("pasEscPrimeiraescolha");
    pasEsc1.innerHTML = "";

    const checkbox1 = document.getElementById("jantar");

    checkbox1.addEventListener("click", function () {
        if (document.getElementsByName("escolha")[0].checked == false) {
            pasEsc1.innerHTML = "";
        } else {
            pasEsc1.innerHTML = "<li>jantar romântico á luz de velas</li>";
        }
    });

    // 2° opção
    const pasEsc2 = document.getElementById("pasEscSegundaescolha");
    pasEsc2.innerHTML = "";

    const checkbox2 = document.getElementById("passeio");

    checkbox2.addEventListener("click", function () {
        if (document.getElementsByName("escolha")[1].checked == false) {
            pasEsc2.innerHTML = "";
        } else {
            pasEsc2.innerHTML = "<li>passeio de barco com paradas em praias paradisiacas</li>";
        }
    });

    // 3° opção
    const pasEsc3 = document.getElementById("pasEscTerceiraescolha");
    pasEsc3.innerHTML = "";

    const checkbox3 = document.getElementById("trilhas");

    checkbox3.addEventListener("click", function () {
        if (document.getElementsByName("escolha")[2].checked == false) {
            pasEsc3.innerHTML = "";
        } else {
            pasEsc3.innerHTML = "<li>trilhas guiadas (com opção de rapel</li>";
        }
    });

    // 4° opção
    const pasEsc4 = document.getElementById("pasEscQuartaescolha");
    pasEsc4.innerHTML = "";

    const checkbox4 = document.getElementById("mergulho");

    checkbox4.addEventListener("click", function () {
        if (document.getElementsByName("escolha")[3].checked == false) {
            pasEsc4.innerHTML = "";
        } else {
            pasEsc4.innerHTML = "<li>mergulho em águas cristalinas</li>";
        }
    });


    // RADIO
    const escr = document.getElementById("escreva");
    escr.innerHTML = "";

    escr.innerHTML = "Reservar";


    const btn1 = document.getElementById("btnres");

    btn1.addEventListener("click", function radioReservado() {

        const btn1 = document.getElementsByName("btnpag");

        if (btn1[0].checked == true) {
            escr.innerHTML = "Reservar";
        }
    });

    const btn2 = document.getElementById("btnpag");

    btn2.addEventListener("click", function radioReservado() {

        const btn2 = document.getElementsByName("btnpag");

        if (btn2[1].checked == true) {
            escr.innerHTML = "Pago";
        }
    });


    // BOTÃO PARA O RESUMO DO PEDIDO
    const btn = document.getElementById("btnreservaroupago");

    btn.addEventListener("click", function () {

        // DATA
        const dat = document.getElementById("data");
        const dat1 = document.getElementById("datares");

        let d = dat.value.toString();

        dat1.innerHTML = "Data: " + d;


        // NOME
        const nome = document.getElementById("name");
        const nom = document.getElementById("nomeres");

        let n = nome.value.toString();

        nom.innerHTML = "Nome: " + n;


        // RADIO NO RESUMO DO PEDIDO
        const resoupag = document.getElementById("reservaroupago");

        function pagamento() {
            const btn = document.getElementsByName("btnpag");
            if (btn[0].checked == true) {
                resoupag.innerHTML = "Reservado";
            } else if (btn[1].checked == true) {
                resoupag.innerHTML = "Pago";
            }
        }
        pagamento();


        // QUANTIDADE DED PESSOAS NO RESUMO DO PEDIDO
        const acomres = document.getElementById("acomresumo");
        const qtdp = document.getElementById("qtdpes");

        let qtd = parseInt(qtdp.value);

        acomres.innerHTML = "Quantidade de pessoas: " + qtd;
    });
});