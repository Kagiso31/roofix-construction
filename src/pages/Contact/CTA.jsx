import Information from "./Information";
import BookingForm from "./BookingForm";

const CTA = () => {
  return (
    <section className="py-28 bg-contact bg-left-bottom bg-no-repeat">
      <div className="px-8 xl:p-0 mx-auto max-w-[1200px]">
        <div className="grid md+:grid-cols-2 gap-8">
          <Information />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default CTA;
