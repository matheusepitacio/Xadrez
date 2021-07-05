setupBackground();

board = [['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
]

var alreadyClicked = false;
var currentPiece = '';
var currentPosition = '';

var pieceImages = {
    'bP': 'assets/b_pawn_svg_withShadow.svg',
    'wP': 'assets/w_pawn_svg_withShadow.svg',
    'bR': 'assets/b_rook_svg_withShadow.svg',
    'wR': 'assets/w_rook_svg_withShadow.svg',
    'bN': 'assets/b_knight_svg_withShadow.svg',
    'wN': 'assets/w_knight_svg_withShadow.svg',
    'bK': 'assets/b_king_svg_withShadow.svg',
    'wK': 'assets/w_king_svg_withShadow.svg',
    'bQ': 'assets/b_Queen_svg_withShadow.svg',
    'wQ': 'assets/w_Queen_svg_withShadow.svg',
    'bB': 'assets/b_bishop_svg_withShadow.svg',
    'wB': 'assets/w_bishop_svg_withShadow.svg'
}

var whiteToMove = true;

var possibleMoves = [];

for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        $(`#${i}${j}`).click(function () {
            var i = $(this).attr('id')[0];
            var j = $(this).attr('id')[1];
            var piece = board[i][j];


            if (piece !== '' && alreadyClicked == false) {
                if (whiteToMove && piece.includes('w')) {
                    currentPiece = piece
                    currentPosition = `${i}${j}`
                    alreadyClicked = !alreadyClicked;

                    switch (piece) {
                        case 'wP':
                            if (currentPosition[0] == 6) {
                                possibleMoves = [`5${j}`, `4${j}`]
                            } else {
                                possibleMoves = [`${i-1}${j}`]
                            }
                            if (board[i - 1][j - 1 + 2].includes('b')){
                                possibleMoves.push(`${i-1}${j - 1 + 2}`)
                            }
                            if (board[i - 1][j - 1].includes('b')) {
                                possibleMoves.push(`${i-1}${j - 1}`)
                            }
                    }

                }

                if (!whiteToMove && piece.includes('b')) {
                    currentPiece = piece
                    currentPosition = `${i}${j}`
                    alreadyClicked = !alreadyClicked;

                    switch (piece) {
                        case 'bP':
                            if (currentPosition[0] == 1) {
                                possibleMoves = [`2${j}`, `3${j}`]
                            } else {
                                possibleMoves = [`${i-1+2}${j}`] //javascript e muito zoado
                            }
                            if (board[i - 1 + 2][j - 1 + 2].includes('w')) {
                                
                                possibleMoves.push(`${i-1+2}${j - 1 + 2}`)
                            }
                            if (board[i - 1 + 2][j - 1].includes('w')) {
                                
                                possibleMoves.push(`${i-1+2}${j - 1}`)
                            }
                    }
                }

            } else {
                console.log(board)
                if (possibleMoves.includes(`${i}${j}`)) {
                    if (alreadyClicked == true && piece == '') {
                        $(`#${currentPosition} > img`).remove();
                        $(`#${i}${j}`).prepend($('<img>', { class: 'img', src: pieceImages[currentPiece] }))
                        alreadyClicked = false;
                        board[currentPosition[0]][currentPosition[1]] = '';
                        board[i][j] = currentPiece;

                        whiteToMove = !whiteToMove;

                    } else {

                        if (whiteToMove && board[i][j].includes('b')) {
                            $(`#${i}${j} > img`).remove();
                            $(`#${currentPosition} > img`).remove();
                            $(`#${i}${j}`).prepend($('<img>', { class: 'img', src: pieceImages[currentPiece] }))

                            alreadyClicked = false;
                            board[currentPosition[0]][currentPosition[1]] = '';
                            board[i][j] = currentPiece;

                            whiteToMove = !whiteToMove;
                        } else if (!whiteToMove && board[i][j].includes('w')) {
                            $(`#${i}${j} > img`).remove();
                            $(`#${currentPosition} > img`).remove();
                            $(`#${i}${j}`).prepend($('<img>', { class: 'img', src: pieceImages[currentPiece] }))

                            alreadyClicked = false;
                            board[currentPosition[0]][currentPosition[1]] = '';
                            board[i][j] = currentPiece;

                            whiteToMove = !whiteToMove;
                        }
                    }
                }
            }

        })
    }
}
