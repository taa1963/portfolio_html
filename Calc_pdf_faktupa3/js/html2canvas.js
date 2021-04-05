//var pdf = new jsPDF("l", "px", "a4");


var doc = new jsPDF({
    unit:'px',
    format: 'a4',
    pageMargins: [35, 25]

});

pdf.addHTML(document.body, function() {
  var string = pdf.output("datauristring");
  $(".preview-pane").attr("src", string);
});
