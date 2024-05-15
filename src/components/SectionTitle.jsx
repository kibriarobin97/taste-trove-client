
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-10 mb-6 md:w-3/12 mx-auto">
            <p className="text-[#D99904] italic text-center text-md border-b-2 py-3">---{subHeading}---</p>
            <h3 className="text-3xl text-center border-b-2 py-3 font-medium">{heading}</h3>
        </div>
    );
};

export default SectionTitle;