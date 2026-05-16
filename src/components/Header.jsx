import html2pdf from "html2pdf.js";

function Header() {
    function handlePrint() {
        window.print();
    }

    function handleDownload() {

        const isConfirmed = window.confirm(
            "Do you want to download your CV as PDF?"
        );

        if (!isConfirmed) return;

        const element =
            document.querySelector(".cv-paper");

        const options = {
            margin: 0.5,
            filename: "My-CV.pdf",
            image: {
                type: "jpeg",
                quality: 1
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: "portrait"
            }
        };

        html2pdf()
            .set(options)
            .from(element)
            .save();
    }

    return (
        <>
            <div className="header">
                <div className="header-left">
                    <h1>CV Builder</h1>
                    <p>Create your CV with an ease.</p>
                </div>
                <div className="header-right">
                    <button onClick={handlePrint} className="print-btn"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" /></svg> Print</button>
                    <button onClick={handleDownload} className="download-btn">Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Header;