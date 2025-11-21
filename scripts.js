function get(id) {
    return +document.getElementById(id).value;
}

function fix(num) {
    return +num.toFixed(3);
}

function result() {
    let W = get("W"),
        l_x = get("l_x"),
        l_y = get("l_y"),
        f = get("f"),
        m = get("m"),
        M = get("M"),
        p_x = get("px"),
        p_y = get("py"),
        L_x = get("Lx"),
        L_y = get("Ly"),
        Z_min = get("Zmin"),
        Z_max = get("Zmax");


    // 1 шаг
    let S = fix((L_x + 12) * (L_y + 12)),

    // 2 шаг
        H = fix(f * m), 

    // 3 шаг
        h = fix(Z_max - Z_min), 
        P_x = fix(p_x + 40 * (h / H)),
        P_y = fix(p_y + 40 * (h / H)),

    // 4 шаг
        b_x = fix(l_x * ( (100 - P_x) / 100 )),
        b_y = fix(l_y * ( (100 - P_y) / 100 )),
    
    // 5 шаг
        B_x = fix(b_x / 100 * m),
        B_y = fix(b_y / 100 * m),

    // 6 шаг
    
        K = Math.ceil( ( (L_y + 12) * 1000 / B_y) + 1),

    // 7 шаг
        n = Math.ceil( ((L_x + 12) * 1000/ B_x) + 1),

    // 8 шаг
        N = fix(n * K),

    // 9 шаг
        L_s = fix(1.2 * S / (B_y / 1000)),

    // 10 шаг
        T_s = fix(L_s / W),

    // 11 шаг
        t_max = fix(0.0001 * M / (W / 3.6)),

    // 12 шаг
        r = fix(B_x / (W / 3.6));

    document.getElementById("S").innerText = S;
    document.getElementById("H").innerText = H;
    document.getElementById("P_x").innerText = P_x;
    document.getElementById("P_y").innerText = P_y;
    document.getElementById("b_x").innerText = b_x;
    document.getElementById("b_y").innerText = b_y;
    document.getElementById("B_x").innerText = B_x;
    document.getElementById("B_y").innerText = B_y;
    document.getElementById("K").innerText = K;
    document.getElementById("n").innerText = n;
    document.getElementById("N").innerText = N;
    document.getElementById("L_s").innerText = L_s;
    document.getElementById("T_s").innerText = T_s;
    document.getElementById("t_max").innerText = t_max;
    document.getElementById("r").innerText = r;

    console.log("Elements calculated")
}

function clearResults() {
    document.getElementById("S").innerText = "Не вычислено";
    document.getElementById("H").innerText = "Не вычислено";
    document.getElementById("P_x").innerText = "Не вычислено";
    document.getElementById("P_y").innerText = "Не вычислено";
    document.getElementById("b_x").innerText = "Не вычислено";
    document.getElementById("b_y").innerText = "Не вычислено";
    document.getElementById("B_x").innerText = "Не вычислено";
    document.getElementById("B_y").innerText = "Не вычислено";
    document.getElementById("K").innerText = "Не вычислено";
    document.getElementById("n").innerText = "Не вычислено";
    document.getElementById("N").innerText = "Не вычислено";
    document.getElementById("L_s").innerText = "Не вычислено";
    document.getElementById("T_s").innerText = "Не вычислено";
    document.getElementById("t_max").innerText = "Не вычислено";
    document.getElementById("r").innerText = "Не вычислено";

    console.log("Results cleared");
}

function changeValue() {
    clearResults();

    console.log("Value changed, results cleared");
}

console.log("/ЗалюбивскийБС")
document.getElementById("getResults").addEventListener("click", result);
document.getElementById("clearResults").addEventListener("click", clearResults);

document.getElementById("W").addEventListener("onchange", changeValue());