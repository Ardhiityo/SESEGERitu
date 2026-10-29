
export default function Location() {
  const mapUrl = "https://maps.app.goo.gl/RwUrxSYLtinoLnyA7";

  const address =
    "Jalan Raya Taktakan, Komplek Makmur Jaya, Gg. Edelwis No. 34 Rt/Rw 002, 009, Drangong, Kec. Taktakan, Kota Serang, Banten 42148, Indonesia";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Sesegeritu%20Produsen%20Minuman%20Sehat%20Serang%2C%20Jalan%20Raya%20Taktakan%2C%20Kota%20Serang%2C%20Banten&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      id="kontak"
      className="bg-[#f8f0df] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* INFORMASI LOKASI */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#b52d40]">
            Our Location
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#173d2b] sm:text-5xl">
            Find Us in Indonesia.
          </h2>

          <div className="mt-9 space-y-6">
            {/* ALAMAT */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e6d2] text-[#245638]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0">
                <h3 className="font-serif font-bold text-[#173d2b]">
                  Address
                </h3>

                <p className="mt-2 break-words text-sm leading-6 text-[#46554b]">
                  {address}
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-[#17633d] underline underline-offset-4 hover:text-[#b52d40]"
                >
                  Get directions
                </a>
              </div>
            </div>

            {/* JAM OPERASIONAL */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e6d2] text-[#245638]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif font-bold text-[#173d2b]">
                  Business Hours
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#46554b]">
                  Monday – Friday: 09:00 – 17:00 WIB
                  <br />
                  Saturday: 09:00 – 15:00 WIB
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* KONTAK BISNIS */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e6d2] text-[#245638]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.09 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.07 8.93a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif font-bold text-[#173d2b]">
                  Contact &amp; Export Inquiries
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#46554b]">
                  Contact our team for product information, wholesale orders,
                  and export partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PETA DAN KARTU LOKASI */}
        <div className="min-w-0 overflow-hidden rounded-3xl border border-[#e7ddc9] bg-white shadow-lg">
          <div className="relative h-[320px] sm:h-[390px] lg:h-[430px]">
            <iframe
              title="Sesegeritu Produsen Minuman Sehat Serang map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div className="min-w-0">
              <h3 className="font-semibold text-[#173d2b]">
                Herbal Rosa
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Serang, Banten, Indonesia
              </p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#185333] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103c24]"
            >
              Open Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
