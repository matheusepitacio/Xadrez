var setupBackground = function () {
    var content = '<table cellspacing="0">'

    for (i = 0; i < 8; i++) {
        content += '<tr>'
        for (j = 0; j < 8; j++) {
            id = `${i}${j}`
            backgroundColor = 'white'

            if (i % 2 != j % 2) backgroundColor = 'black'

            content += '<td id=' + id + ' class=' + backgroundColor + '>' + '</td>'
        }
        content += '</tr>'
    }
    content += "</table>"

    $('#board').append(content);

    for (j = 0; j < 8; j++) {
        $(`#1${j}`).prepend($('<img>', { class: 'img', src: 'assets/b_pawn_svg_withShadow.svg' }))
        $(`#6${j}`).prepend($('<img>', { class: 'img', src: 'assets/w_pawn_svg_withShadow.svg' }))
    }

    $(`#00`).prepend($('<img>', { class: 'img', src: 'assets/b_rook_svg_withShadow.svg' }))
    $(`#01`).prepend($('<img>', { class: 'img', src: 'assets/b_knight_svg_withShadow.svg' }))
    $(`#02`).prepend($('<img>', { class: 'img', src: 'assets/b_bishop_svg_withShadow.svg' }))
    $(`#03`).prepend($('<img>', { class: 'img', src: 'assets/b_queen_svg_withShadow.svg' }))
    $(`#04`).prepend($('<img>', { class: 'img', src: 'assets/b_king_svg_withShadow.svg' }))
    $(`#05`).prepend($('<img>', { class: 'img', src: 'assets/b_bishop_svg_withShadow.svg' }))
    $(`#06`).prepend($('<img>', { class: 'img', src: 'assets/b_knight_svg_withShadow.svg' }))
    $(`#07`).prepend($('<img>', { class: 'img', src: 'assets/b_rook_svg_withShadow.svg' }))

    $(`#70`).prepend($('<img>', { class: 'img', src: 'assets/w_rook_svg_withShadow.svg' }))
    $(`#71`).prepend($('<img>', { class: 'img', src: 'assets/w_knight_svg_withShadow.svg' }))
    $(`#72`).prepend($('<img>', { class: 'img', src: 'assets/w_bishop_svg_withShadow.svg' }))
    $(`#73`).prepend($('<img>', { class: 'img', src: 'assets/w_king_svg_withShadow.svg' }))
    $(`#74`).prepend($('<img>', { class: 'img', src: 'assets/w_queen_svg_withShadow.svg' }))
    $(`#75`).prepend($('<img>', { class: 'img', src: 'assets/w_bishop_svg_withShadow.svg' }))
    $(`#76`).prepend($('<img>', { class: 'img', src: 'assets/w_knight_svg_withShadow.svg' }))
    $(`#77`).prepend($('<img>', { class: 'img', src: 'assets/w_rook_svg_withShadow.svg' }))
}