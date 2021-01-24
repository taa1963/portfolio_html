

$(document).ready(function() {

  //  var canvas = document.getElementById('tutorial');
  //  var ctx = canvas.getContext('2d');
    //
    //
    //ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    //ctx.fillRect (30, 30, 55, 50);
    //
    //ctx.beginPath();
    //ctx.fill(20,35,50,80,90,300,20);

    //var canvas = document.getElementById("tutorial"),
    //    context = canvas.getContext("2d");
    //
    //var img = new Image();
    //img.src = "img/slide4N.png";
    //img.onload = function() {
    //
    //    context.drawImage(img, 0, 0);
    //}
   // ctx.beginPath(); //Начинаем рисовать:

    //ctx.moveTo(25,25); //Определяем начальную точку:
    //
    //ctx.lineTo(105,25);  //Первая линия
    //ctx.lineTo(105,105);  //2 линия
    //ctx.lineTo(25,105);  //3 линия
    //ctx.lineTo(25,25);  //4 линия
    //ctx.stroke();
    //
    //ctx.lineWidth = 2;

   // ctx.fillRect(0,0,290,200);
    //clearRect(x, y, width, height)
    //ctx.strokeRect(100, 50, 60, 30);
    //ctx.stroke();
    //ctx.lineWidth = 2;

    //ctx.fillStyle = "rgb(rr,gg,bb)";
   //context.fillStyle = "rgba(0, 0, 200, 0.5)";






        //$('.savedraft').click(function(){
        //    alert(2);
        //
        //    html2canvas([ document.getElementById('div2image') ],{
        //        onrendered: function(canvas) {
        //            window.open(canvas.toDataURL());
        //
        //        }
        //    });
        //})


    //$('.savedraft').click(function(){
    //    alert(33)
    //html2canvas($("#div2image"), {
    //    onrendered: function (canvas) {
    //        document.body.appendChild(canvas);
    //    }
    //
    //});
    //});
    //var data=[
    //    {
    //        date_begin: "2013-06-02",
    //        date_end: "2017-03-27",
    //        stavka: '10'
    //    },
    //    {
    //        date_begin: "2017-03-27",
    //        date_end: "2017-05-02",
    //        stavka: '9.75'
    //    }
    //    ];

   // var pdf = new jsPDF('portrait', 'pt', 'letter');
   // рабочий вариант..//
    function saveMatrix(tab) {
        var dd = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            pageMargins: [35, 25],
            content: []
        };

        if (tab == 'single') {
            alert(99)
            html2canvas(document.getElementById('single'), {
                onrendered: function (canvas) {
                    dd.content.push({
                        image: canvas.toDataURL('image/jpeg', 1.0),
                        fit: [780, 500]
                    });
                    //dd.content.push({
                    //    text: ladini_matrix.text
                    //});
                    console.log(dd);
                    pdfMake.createPdf(dd).download('matrix_snegovaya.com.pdf');
                },
                background: "#fff"
            });
        } else if (tab == 'synastry') {
            alert(888)
            html2canvas(document.getElementById('synastry-result-1'), {

                onrendered: function (canvas) {
                    dd.content.push({
                        image: canvas.toDataURL('image/jpeg', 1.0),
                        fit: [800, 500]
                    });
                    //dd.content.push({
                    //    text: ladini_matrix.text,
                    //    pageBreak: 'after'
                    //});

                    html2canvas(document.getElementById('synastry-result-2'), {
                        onrendered: function (canvas) {
                            dd.content.push({
                                image: canvas.toDataURL('image/jpeg', 1.0),
                                fit: [800, 500]
                            });

                            //dd.content.push({
                            //    text: "tetsttsts",
                            //    pageBreak: 'after'
                            //});

                            html2canvas(document.getElementById('synastry-result-3'), {
                                onrendered: function (canvas) {
                                    dd.content.push({
                                        image: canvas.toDataURL('image/jpeg', 1.0),
                                        fit: [800, 500]
                                    });
                                    //dd.content.push({
                                    //    text: ladini_matrix.text
                                    //});
                                    pdfMake.createPdf(dd).download('matrix_snegovaya.com.pdf');
                                },
                                background: "#fff"
                            });
                        },
                        background: "#fff"
                    });
                },
                background: "#fff"
            });
        }
    }

window.saveMatrix=saveMatrix;



    $('.savedraft').click(function() {


    //html2canvas($("#div2image"), {
    //    onrendered: function(canvas) {
    //        var imgData = canvas.toDataURL(
    //            'image/png');
    //        var doc = new jsPDF('p', 'mm');
    //        doc.addImage(imgData, 'PNG', 0, 0);
    //
    //        //doc.addImage(imgData, 'JPEG', 0, 0, 100, 100);
    //
    //        doc.save('sample-file.pdf');
    //    }
    //});
    //});


    function saveMatrix(tab) {
        var dd = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            pageMargins: [35, 25],
            content: []
        };

        if (tab == 'single') {
            alert(99)
            html2canvas(document.getElementById('div2image'), {
                onrendered: function (canvas) {
                    dd.content.push({
                        image: canvas.toDataURL('image/jpeg', 1.0),
                        fit: [780, 500]
                    });
                    dd.content.push({
                        text: ladini_matrix.text
                    });
                    pdfMake.createPdf(dd).download('matrix_snegovaya.com.pdf');
                },
                background: "#fff"
            });
        } else if (tab == 'synastry') {
            html2canvas(document.getElementById('synastry-result-1'), {
                onrendered: function (canvas) {
                    dd.content.push({
                        image: canvas.toDataURL('image/jpeg', 1.0),
                        fit: [800, 500]
                    });
                    dd.content.push({
                        text: ladini_matrix.text,
                        pageBreak: 'after'
                    });

                    html2canvas(document.getElementById('synastry-result-2'), {
                        onrendered: function (canvas) {
                            dd.content.push({
                                image: canvas.toDataURL('image/jpeg', 1.0),
                                fit: [800, 500]
                            });
                            dd.content.push({
                                text: ladini_matrix.text,
                                pageBreak: 'after'
                            });

                            html2canvas(document.getElementById('synastry-result-3'), {
                                onrendered: function (canvas) {
                                    dd.content.push({
                                        image: canvas.toDataURL('image/jpeg', 1.0),
                                        fit: [800, 500]
                                    });
                                    dd.content.push({
                                        text: ladini_matrix.text
                                    });
                                    pdfMake.createPdf(dd).download('matrix_snegovaya.com.pdf');
                                },
                                background: "#fff"
                            });
                        },
                        background: "#fff"
                    });
                },
                background: "#fff"
            });
        }
    }

        });








    //    $('.savedraft').click(function() {
    //    var pdf = new jsPDF('p', 'pt', 'letter');
    //    // source can be HTML-formatted string, or a reference
    //    // to an actual DOM element from which the text will be scraped.
    //    source = $('#div2image')[0];
    //
    //    // we support special element handlers. Register them with jQuery-style
    //    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    //    // There is no support for any other type of selectors
    //    // (class, of compound) at this time.
    //    specialElementHandlers = {
    //        // element with id of "bypass" - jQuery style selector
    //        '#bypassme': function (element, renderer) {
    //            // true = "handled elsewhere, bypass text extraction"
    //            return true
    //        }
    //    };
    //    margins = {
    //        top: 80,
    //        bottom: 60,
    //        left: 40,
    //        width: 522
    //    };
    //    // all coords and widths are in jsPDF instance's declared units
    //    // 'inches' in this case
    //    pdf.fromHTML(
    //        source, // HTML string or DOM elem ref.
    //        margins.left, // x coord
    //        margins.top, { // y coord
    //            'width': margins.width, // max width of content on PDF
    //            'elementHandlers': specialElementHandlers
    //        },
    //
    //        function (dispose) {
    //            // dispose: object with X, Y of the last line add to the PDF
    //            //          this allow the insertion of new lines after html
    //            pdf.save('Test.pdf');
    //        }, margins);
    //
    //});



        //alert(444);
        //pdf.addHTML($('#div2image'), function () {
        //    pdf.save('test.pdf');
        //});
   // });

    //$('.savedraft3').click(function(){
    //    //alert(5554);
    //   // getPDF();
    //
    //    //var rows = data;
    //    //var columns = [
    //    //    { title: "S.No", key: "RowNum" },
    //    //    { title: "Title", key: "TTitle" },
    //    //    { title: "Phone Number", key: "PhoneNumber" },
    //    //    { title: "Loc. Name", key: "LocationName" },
    //    //    { title: "Dept. Name", key: "DepartmentName" }
    //    //];
    //    //var doc = new jsPDF("I", "mm", "a4");
    //    //
    //    //
    //    //var canvas1 = document.getElementById("div2image");
    //    //var content = $("#sfDepartmentbar").html();
    //    //canvg(canvas1, content, {
    //    //    renderCallback: function () {
    //    //        html2canvas($("#rptgraphsec"), {
    //    //            onrendered: function (canvas) {
    //    //
    //    //
    //    //
    //    //                var html = '';
    //    //                html += "<div style='font-size:18px;'>Report Title</div>"
    //    //                html += '<div>Generated By : ' + 'sanjeev'+ '</div>';
    //    //
    //
    //        //
    //        //            doc.setFontSize(8);
    //        //            doc.fromHTML(html, 10, 10, { 'width': 100 });
    //        //
    //        //
    //        //
    //        //            var imgData = canvas.toDataURL('image/png');
    //        //            doc.addImage(imgData, 'PNG', 5, 55, 200, 100);
    //        //
    //        //
    //        //
    //        //            if (data.length > 0) {
    //        //                doc.autoTable(columns, rows, {
    //        //                    startX: 5,
    //        //                    startY: 165,
    //        //                    margin: 5,
    //        //                    tableWidth: 'auto',
    //        //                    theme: 'grid',
    //        //                    lineWidth: 0.1,
    //        //                    fillStyle: 'F',
    //        //                    pageBreak: 'auto',
    //        //                    styles: {
    //        //                        overflow: 'linebreak',
    //        //                        fontSize: 10,
    //        //                    },
    //        //                    headerStyles: {
    //        //                        fillColor: [53, 133, 201],
    //        //                        columnWidth: 'auto',
    //        //                        rowHeight: 10,
    //        //                        cellPadding: 0.5,
    //        //                        halign: 'center',
    //        //                        valign: 'middle',
    //        //                    },
    //        //                    bodyStyles: {
    //        //                        columnWidth: 'wrap',
    //        //                        rowHeight: 8,
    //        //                        halign: 'left',
    //        //                        valign: 'middle',
    //        //                        cellPadding: 0,
    //        //                        halign: 'center',
    //        //                        valign: 'middle'
    //        //                    }
    //        //                });
    //        //            }
    //        //            doc.save("Report.pdf");
    //        //
    //        //
    //        //
    //        //        }
    //        //    });
    //        //}
    //    });




//    function getPDF() {
//        doCanvas();
//
//        $(document).bind('function_a_complete', doPDF);
//    }
//
//    function doCanvas() {
//        html2canvas(document.querySelector("#div2image")).then(canvas => {
//            document.querySelector("#div2image").appendChild(canvas);
//    });
//    $(document).trigger('function_a_complete');
//}
//function doPDF() {
//
//    console.log("do pdf");
//    var doc = new jsPDF();
//    doc.fromHTML($('#div2image').html(), 20, 20, {'width':500});
//    doc.text(50,50, "Новый текст");
//    doc.save('test.pdf');
//}

//
//        function getPDF() {
//            alert(55);
//            doCanvas();
//        }
//
//        //function doCanvas() {
//        //    html2canvas(document.querySelector("#div2image")).then(canvas => {
//        //        doPDF(canvas);
//        //});
//
//    function doCanvas() {
//        html2canvas(document.querySelector("#div2image")).then(canvas => {
//            doPDF(canvas);
//    });
//
//}
//
//
//
//    function doPDF(canvas) {
//        var doc = new jsPDF({
//            format: 'a4'
//        });
//        doc.addImage(canvas.toDataURL(), 'PNG', 0, 0);
//        doc.save('test.pdf');
//    }


    //html2canvas($("#div2image"), {
        //    onrendered: function (canvas) {
        //        var doc = document.getElementById('div2image');
        //        doc.addImage(canvas.toDataURL("image/jpeg"), 'jpeg', 15, 40, 180, 160);
        //        doc.addImage(canvas.toDataURL("image/jpeg"), 'JPEG', 0, 0, 215, 40);
        //        doc.addPage();
        //        doc.save('All_charts_' + 1234 + '.pdf');
        //    }
        //    });



        //async generateAllPdf() {
        //    const doc = new jsPDF('p', 'mm', 'a4');
        //    const options = {
        //        pagesplit: true
        //    };
        //    const ids = document.querySelectorAll('[id]');
        //    const length = ids.length;
        //    for (var i = 0; i < length; i++) {
        //        const chart = document.getElementById(ids[i].id);
        //        // excute this function then exit loop
        //        await html2canvas(chart, { scale: 1 }).then(function (canvas) {
        //            doc.addImage(canvas.toDataURL('image/png'), 'JPEG', 10, 50, 200, 150);
        //            if (i < (length - 1)) {
        //                doc.addPage();
        //            }
        //        });
        //    }
        //    // download the pdf with all charts
        //    doc.save('All_charts_' + Date.now() + '.pdf');
        //}








        //
        //    alert(33)
        //html2canvas($("#div2image"), {
        //    onrendered: function (canvas) {
        //        document.body.appendChild(canvas);
        //    }
        //
        //});

        //html2canvas(document.getElementById('div2image'), {
        //    onrendered: function (canvas) {
        //        var doc = new jsPDF();
        //        doc.addImage(canvas.toDataURL("image/jpeg"), 'jpeg', 15, 40, 180, 160);
        //        doc.addImage(canvas.toDataURL("image/jpeg"),'JPEG', 0, 0, 215, 40);
        //        doc.addPage();
        //        doc.save(attrs.fileName);
        //    });



        //html2canvas(document.getElementById('div2image'), {
        //    onrendered: function (canvas) {
        //        var data = canvas.toDataURL();
        //        var docDefinition = {
        //            content: [{
        //                image: data,
        //                width: 500
        //            }]
        //        };
        //        pdfMake.createPdf(docDefinition).download("name .pdf");
        //    }
        //});



    //
    //    html2canvas(document.getElementById('target')).then(canvas => {
    //        document.body.appendChild(canvas)
    //});
    //    alert(2);
    //
    //        html2canvas([ document.getElementById('div2image') ],{
    //            onrendered: function(canvas) {
    //                window.open(canvas.toDataURL());
    //
    //            }
    //        });

        //html2canvas(document.getElementById('div2image'), {
        //    onrendered: function (canvas) {
        //        var data = canvas.toDataURL();
        //        var docDefinition = {
        //            content: [{
        //                image: data,
        //                width: 500
        //            }]
        //        };
        //      //  pdf.save('Test.pdf');
        //        pdfMake.createPdf(docDefinition).download('test.pdf');
        //    }
        //});


        //html2canvas(document.body, {
        //    onrendered: function(canvas) {
        //        document.body.appendChild(canvas);
        //    },
        //    width: 500,
        //    height: 500
        //});

        //
        //$(document).ready(function () {
        //    html2canvas($("#div2image"), {
        //        onrendered: function(canvas) {
        //            document.body.appendChild(canvas);
        //        }
        //    });
        //});



    //html2canvas(document.getElementById("div2image"), {
    //    onrendered: function(canvas) {
    //        document.body.appendChild(canvas);
    //    },
    //    width: 500,
    //    height: 500
    //});

        //$('.savedraft').click(function(){
        //
        //let printContents = document.getElementById('results_table');
        //html2canvas(printContents).then(async function(canvas) {
        //    let win = window.open();
        //    await win.document.write("<br><img src='"+canvas.toDataURL()+"'/>");
        //    win.print();
        //});
        //});


    //});
});






