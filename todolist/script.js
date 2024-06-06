let inputfill = document.body.querySelector('.inputfill');
let btn = document.body.querySelector('.btn');

btn.addEventListener('click', () => {
    if (inputfill.value == '') {
        alert('write something');
    } else {
        let copied = inputfill.value;
        console.log(copied)
        let li = document.createElement('li');
        li.innerHTML = `${copied}`;

        let bt = document.createElement('button');
        bt.innerHTML = 'x';
        bt.classList.add('del');
        bt.style.display = 'none'; // Hide the button by default
        bt.onclick = function () {
            this.parentElement.remove();
        }
        li.appendChild(bt);

        li.onclick = function () {
            this.classList.toggle('check');
            if (this.classList.contains('check')) {
                bt.style.display = 'inline'; // Show the button
                bt.style.textDecoration='none'
            }
            else {
                bt.style.display = 'none'; // Hide the button
            }
        }
        document.body.querySelector('.list').appendChild(li);
        inputfill.value = '';
    }
}
)

inputfill.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (inputfill.value == '') {
            alert('write something');
        } else {
            let copied = inputfill.value;
            console.log(copied)
            let li = document.createElement('li');
            li.innerHTML = `${copied}`;

            let bt = document.createElement('button');
            bt.innerHTML = 'x';
            bt.classList.add('del');
            bt.style.display = 'none'; // Hide the button by default
            bt.onclick = function () {
                this.parentElement.remove();
            }
            li.appendChild(bt);

            li.onclick = function () {
                this.classList.toggle('check');
                if (this.classList.contains('check')) {
                    bt.style.display = 'inline'; // Show the button
                    bt.style.textDecoration='none'
                }
                else {
                    bt.style.display = 'none'; // Hide the button
                }
            }
            document.body.querySelector('.list').appendChild(li);
            inputfill.value = '';
        }
    }
})