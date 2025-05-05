// Navegação entre etapas do formulário
const steps = document.querySelectorAll(".step");
const prevStepButton = document.getElementById("prevStep");
const nextStepButton = document.getElementById("nextStep");
const submitButton = document.getElementById("submitForm");
let currentStep = 0;

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    prevStepButton.disabled = currentStep === 0;
    nextStepButton.style.display = currentStep === steps.length - 1 ? "none" : "inline-block";
    submitButton.style.display = currentStep === steps.length - 1 ? "inline-block" : "none";
}

prevStepButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextStepButton.addEventListener("click", () => {
    const currentFields = steps[currentStep].querySelectorAll("input[required]");
    let allValid = true;

    currentFields.forEach((field) => {
        if (!field.checkValidity()) {
            allValid = false;
            field.reportValidity();
        }
    });

    if (allValid && currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
});

updateStep();

// Exibe campos adicionais com base no tipo de loja selecionado
document.querySelectorAll('input[name="storeType"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
        document.getElementById("physicalFields").classList.remove("active");
        document.getElementById("webFields").classList.remove("active");
        document.getElementById("bothFields").classList.remove("active");

        if (event.target.value === "physical") {
            document.getElementById("physicalFields").classList.add("active");
        } else if (event.target.value === "web") {
            document.getElementById("webFields").classList.add("active");
        } else if (event.target.value === "both") {
            document.getElementById("bothFields").classList.add("active");
        }
    });
});

// Busca de endereço por CEP usando a API ViaCEP
function fetchAddress(cep, resultElementId) {
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    document.getElementById(resultElementId).textContent = "CEP inválido.";
                    document.getElementById(resultElementId).style.color = "red";
                } else {
                    document.getElementById(resultElementId).textContent = `Rua: ${data.logradouro}`;
                    document.getElementById(resultElementId).style.color = "green";
                }
                document.getElementById(resultElementId).style.display = "block";
            })
            .catch(() => {
                document.getElementById(resultElementId).textContent = "Erro ao buscar o endereço.";
                document.getElementById(resultElementId).style.color = "red";
                document.getElementById(resultElementId).style.display = "block";
            });
    } else {
        document.getElementById(resultElementId).textContent = "CEP deve ter 8 dígitos.";
        document.getElementById(resultElementId).style.color = "red";
        document.getElementById(resultElementId).style.display = "block";
    }
}

document.getElementById("storeCep").addEventListener("input", (event) => {
    const cep = event.target.value.replace(/\D/g, "");
    fetchAddress(cep, "storeCepResult");
});

document.getElementById("storeCepBoth").addEventListener("input", (event) => {
    const cep = event.target.value.replace(/\D/g, "");
    fetchAddress(cep, "storeCepBothResult");
});