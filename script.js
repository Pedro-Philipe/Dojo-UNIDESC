$(document).ready(function(){
    $('#d').on ('change', function(){
        console.log($('#d').val())
    
    })
    $.ajax({
        url: 'http://api.salic.cultura.gov.br/v1/fornecedores/?limit=10',
        dataType: 'json',
        success: function(data) {
           $(data._embedded.fornecedores).each(function( index,fornecedor ) {
            $("#d").append("<option value=\"\">"+ fornecedor.cgccpf+"</option>")
           });
    
          console.log(data._embedded.fornecedores);
        }
      });
})