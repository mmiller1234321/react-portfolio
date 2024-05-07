import Project from "../components/UI/Project";

export default function PortfolioPage(){
    return (
        <div>
            <main>
                <div>
                    Sample Projects 
                    <br />
                    <br />
                </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="card-deck">
                     <Project />
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}