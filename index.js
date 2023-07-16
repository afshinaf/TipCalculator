const calculateTip = () => {
    const inputElement = document.getElementById('bill')
    const billValue = +inputElement.value

    const tipPercent = +document.getElementById('tipPercent').value

    const people = +document.getElementById('people').value

    const tip = (billValue + (billValue * (tipPercent / 100))) / people

    document.getElementById('tip').innerHTML = tip.toString()
}
