
$('#index-output').click(function () {
    $('#output-index').show();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-indexjs').hide();
});
$('#code-output').click(function () {
    $('#output-index').hide();
    $('#output-code').show();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-indexjs').hide();
});
$('#solve-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').show();
    $('#output-codejs').hide();
    $('#output-indexjs').hide();
});
$('#codejs-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').show();
    $('#output-indexjs').hide();
});
$('#indexjs-output').click(function () {
    $('#output-index').hide();
    $('#output-code').hide();
    $('#output-solve').hide();
    $('#output-codejs').hide();
    $('#output-indexjs').show();
});
