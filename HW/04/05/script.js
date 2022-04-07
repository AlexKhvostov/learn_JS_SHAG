// <tr>
//     <th scope="row">3</th>
//     <td colSpan="2">Larry the Bird</td>
//     <td>@twitter</td>
// </tr>

const tbody = document.body.querySelector('tbody');


function loadAirRace(pStart, pFinish){
    //показать спинер
    let load = fetch("https://api.instantwebtools.net/v1/airlines");

    load.then((response) => response.json())
        .then((json) => {
            for (let i = pStart; i<= pFinish ;i++){



            }
        });

    load.catch(alert("Произошла ошибка при загрузке"));
    load.finally(
        //скрыть спинер
    );
}

loadAirRace(0, 19);
