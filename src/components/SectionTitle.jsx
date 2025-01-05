

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-1/2 mx-auto text-center my-10">
            <p className="text-yellow-300 mb-3">--- { subHeading } ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{  heading }</h3>
        </div>
    );
};

export default SectionTitle;