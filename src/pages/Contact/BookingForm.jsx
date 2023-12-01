import { useState } from "react";

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  address: "",
  comments: "",
};

const BookingForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  return (
    <div className="space-y-5 px-5 pb-[1.875rem] pt-[3.75rem] shadow-md rounded-md bg-[#F6F6F6] sm:px-[3.75rem]">
      <div className="space-y-2">
        <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
          Booking Form
        </strong>
        <h2 className="font-extrabold text-4xl leading-tight">
          Send Us a Message
        </h2>
      </div>
      <div>
        <form className="space-y-4">
          <div className="space-y-2">
            <div>
              <label className="visually-hidden" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-md text-[#666666] border-[#cccccc] border pb-[0.875rem] px-[0.9375rem] pt-4 focus:outline-[#80bdff] focus:outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name *"
                required
                value={data.name}
                onChange={(e) => updateFields({ name: e.target.value })}
              />
            </div>
            <div>
              <label className="visually-hidden" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-md text-[#666666] border-[#cccccc] border pb-[0.875rem] px-[0.9375rem] pt-4 focus:outline-[#80bdff] focus:outline"
                id="email"
                name="email"
                type="email"
                placeholder="E-mail *"
                required
                value={data.email}
                onChange={(e) => updateFields({ email: e.target.value })}
              />
            </div>
            <div>
              <label className="visually-hidden" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-md text-[#666666] border-[#cccccc] border pb-[0.875rem] px-[0.9375rem] pt-4 focus:outline-[#80bdff] focus:outline"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone *"
                required
                value={data.phone}
                onChange={(e) => updateFields({ phone: e.target.value })}
              />
            </div>
            <div>
              <label className="visually-hidden" htmlFor="address">
                Address
              </label>
              <input
                className="w-full rounded-md text-[#666666] border-[#cccccc] border pb-[0.875rem] px-[0.9375rem] pt-4 focus:outline-[#80bdff] focus:outline"
                id="address"
                name="address"
                type="text"
                placeholder="Address *"
                required
                value={data.address}
                onChange={(e) => updateFields({ address: e.target.value })}
              />
            </div>
            <div>
              <label className="visually-hidden" htmlFor="comments">
                Comments
              </label>
              <textarea
                className="w-full rounded-md text-[#666666] border-[#cccccc] border pb-[0.875rem] px-[0.9375rem] pt-4 focus:outline-[#80bdff] focus:outline"
                id="comments"
                name="comments"
                placeholder="Comments"
                value={data.comments}
                onChange={(e) => updateFields({ comments: e.target.value })}
              ></textarea>
            </div>
          </div>

          <button className="font-bold text-lg text-white uppercase w-full px-4 py-[0.935rem] rounded bg-accent hover:bg-[#d21c1d]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
