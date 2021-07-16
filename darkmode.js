let mode = 'white';

function darkmodeSwitch(){
    
    if(mode == 'white'){
        document.getElementById('ThemeSwitch').classList.add('active');
        document.getElementById('Body').classList.add('dark');
        document.getElementById('Logo').classList.add('white');
        mode = 'dark';
    } else{
        document.getElementById('ThemeSwitch').classList.remove('active');
        document.getElementById('Body').classList.remove('dark');
        document.getElementById('Logo').classList.remove('white');
        mode = 'white';
    }
}