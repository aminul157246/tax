document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const annualIncome = parseFloat(document.getElementById("annualIncome").value);
    const extraIncome = parseFloat(document.getElementById("extraIncome").value);
    const ageGroup = parseInt(document.getElementById("ageGroup").value);
    const deductions = parseFloat(document.getElementById("deductions").value);

    if (isNaN(annualIncome) || isNaN(extraIncome) || isNaN(ageGroup) || isNaN(deductions)) {
        alert("Please enter valid numbers.");
        return;
    }

    let taxRate;
    if (ageGroup < 40) {
        taxRate = 0.3;
    } else if (ageGroup >= 40 && ageGroup < 60) {
        taxRate = 0.4;
    } else if (ageGroup >= 60) {
        taxRate = 0.1;
    } else {
        alert("Please enter a valid age.");
        return;
    }

    const totalIncome = annualIncome + extraIncome - deductions;
    let tax = 0;
    if (totalIncome > 800000) {
        tax = taxRate * (totalIncome - 800000);
    }

    document.getElementById("incomeResult").innerText = `Total Income: ${totalIncome.toFixed(2)} Lakhs`;
    document.getElementById("taxResult").innerText = `Tax: ${tax.toFixed(2)} Lakhs`;
    document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
});

const inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(input => {
    input.addEventListener("input", function() {
        const errorIcon = this.nextElementSibling;
        const errorMessage = errorIcon.nextElementSibling;
        if (isNaN(parseFloat(this.value))) {
            errorIcon.classList.add("active");
        } else {
            errorIcon.classList.remove("active");
            if (!errorMessage.classList.contains("error-icon")) {
                errorMessage.style.display = "none";
            }
        }
    });

    input.addEventListener("mouseover", function() {
        const errorIcon = this.nextElementSibling;
        const errorMessage = errorIcon.nextElementSibling;
        if (errorIcon.classList.contains("active")) {
            errorMessage.classList.add("error-icon");
        }
    });

    input.addEventListener("mouseout", function() {
        const errorIcon = this.nextElementSibling;
        const errorMessage = errorIcon.nextElementSibling;
        if (errorIcon.classList.contains("active")) {
            errorMessage.classList.remove("error-icon");
        }
    });
});



