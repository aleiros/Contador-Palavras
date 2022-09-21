function calcular() {
    var text = document.getElementById('textarea').value;
    var result = text.split(' ').length;

    document.getElementById('resultado').innerHTML = 'O texto tem: ' + result + ' palavras';
}