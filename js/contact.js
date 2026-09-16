document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".texteACopier");
    const toast = document.getElementById("copieToast");

    elements.forEach(element => {
        element.addEventListener("click", function () {
            const texte = this.textContent;

            navigator.clipboard.writeText(texte).then(() => {
                toast.textContent = "Texte copié : " + texte;
                toast.classList.add("show");

                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2500);
            }).catch((err) => {
                console.error("Erreur de copie :", err);
            });
        });
    });
});  