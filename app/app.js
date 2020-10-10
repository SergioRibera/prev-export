const { exec } = require('child_process');

window.addEventListener('DOMContentLoaded', () => {
    Command("prev-export");
})

function ShowNotify(msg){
    alert(msg);
}
function Command(cmd){
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            ShowNotify(err.message);
            return;
        }
        if (stderr) {
            ShowNotify(stderr);
            return;
        }
        ShowNotify(stdout);
    });
}