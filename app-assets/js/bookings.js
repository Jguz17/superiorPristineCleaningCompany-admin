// document.querySelector('#booking-list').innerHTML += `<tr>
// <td>Hard Coded</td>
// <td>ABC Fintech LTD.</td>
// <td>Jan 1,2019</td>
// <td><span class="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
// <td>$ 1000.00</td>
// <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
// </tr>`
async function getBookings() {
    let response = await fetch('https://spcc-api.herokuapp.com/api/v1/bookings');
    let data = await response.json();

    data.map(booking => {
        console.log(booking)
        document.querySelector('#booking-list').innerHTML += `<tr>
            <td>${booking.name}</td>
            <td>${booking.email}</td>
            <td>${booking.phone}</td>
            <td>${booking.address}</td>
            <td>${booking.datetime}</td>
            <td class="center-align"><a href="#"><i class="material-icons pink-text">clear</i></a></td>
            </tr>`
    })
}

getBookings()
