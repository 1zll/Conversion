function convertToRem() {
    // 基本フォントサイズの選択値を取得
    var baseFontSize = document.getElementById('baseFontSize').value;
    
    // 入力されたpxの値を取得
    var pxValue = document.getElementById('inputValue').value;

    // 入力が空でないか確認
    if (pxValue.trim() === '') {
        alert('値を入力してください');
        return;
    }

    // 入力が数字であるか確認
    if (isNaN(pxValue)) {
        alert('有効な数字を入力してください');
        return;
    }

    // pxからremに変換
    var remValue = (pxValue / baseFontSize).toFixed(3);

    // 結果を表示
    document.getElementById('result').innerHTML = remValue + 'rem';
}
