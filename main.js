(function() {
    const words = document.documentElement.innerText.match(/[a-zA-Z_-]+/g);
    const uniqueWords = [...new Set(words)].sort();
    
    document.open();
    document.write(uniqueWords.join("<br>"));
    document.close();
})();
