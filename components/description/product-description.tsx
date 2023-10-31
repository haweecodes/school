const Description = ({ description }: { description: string }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: description }} />
    );
};

export default Description;
