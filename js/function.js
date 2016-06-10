/**
 * Created by alexsewell on 6/6/16.
 */

$('.section-tab').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

function myFunction() {
    window.print();
}