import BlogImg from "../../../images/Vegetables.jpg";
import { CalendarFold, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function Details() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    let getDetails = async (id) => {
        try {
            let res = await axios.get("/api/blog/" + id);
            let data = res.data;
            setBlog(data.blog);
        } catch (err) {
            console.error("Error fetching blog:", err);
        }
    };

    useEffect(() => {
        getDetails(id);
    }, [id]);

    console.log(blog);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div>
                <div className="flex gap-6 justify-center">
                    <p className="text-gray-700 flex items-center gap-1">
                        <CalendarFold size={16} />
                        {dayjs(blog?.created_at).format("DD.MM.YYYY")}
                    </p>
                    <p className="text-gray-700 flex items-center gap-1">
                        <Clock size={16} />
                        {dayjs(blog?.created_at).format("hh:mm A")}
                    </p>
                </div>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-medium my-3 text-center">
                    {blog?.title}
                </h1>
                <div
                    className="text-center text-gray-700 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: blog?.paragraph }}
                ></div>

                <img
                    src={BlogImg}
                    alt=""
                    className="w-full h-60 md:h-80 object-cover rounded-lg my-7"
                />
                <div>
                    <h1 className="text-xl font-medium mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h1>
                    <p className="text-gray-800 mb-4 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo dolorum suscipit eos dolores porro nisi dolor
                        numquam iusto sed vero natus quaerat nostrum voluptate
                        odio officia ex sapiente veniam, repellendus ab quod,
                        praesentium atque delectus! Sint et corporis amet cum.
                        Sunt assumenda molestias doloremque? Suscipit!
                    </p>
                    <h1 className="text-xl font-medium mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h1>
                    <p className="text-gray-800 mb-4 text-sm md:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus expedita, blanditiis excepturi sint
                        incidunt illum a voluptatem. Soluta aliquam alias
                        quisquam, officiis sequi mollitia architecto rerum
                        molestias nisi temporibus, numquam similique quo itaque
                        ea magnam quam exercitationem beatae, obcaecati harum.
                        Fugit, aut. Recusandae perferendis velit repellendus
                        eveniet quis, voluptate soluta consequuntur expedita a
                        facere earum id pariatur deleniti, ut aperiam autem.
                        Optio dolorem doloribus sed quod suscipit, corporis hic
                        autem fugiat, eligendi quos quaerat totam. Sint harum
                        itaque iusto perspiciatis, ipsa atque laboriosam odio
                        alias sed architecto. Earum at ipsa amet, quasi
                        voluptates numquam vitae consequatur obcaecati aperiam
                        nam saepe sit ipsum dicta officiis iste aspernatur sequi
                        facere, consequuntur odit odio. Velit quibusdam labore,
                        aperiam doloribus repellendus earum, dolores distinctio
                        voluptatibus eveniet dolore sit cumque tempora sint
                        reprehenderit quam pariatur accusamus ratione. Ab
                        veritatis amet quos accusantium reprehenderit, numquam
                        excepturi quisquam illum ipsa recusandae nesciunt iure
                        et saepe nulla molestiae consectetur fuga qui, inventore
                        alias? Repudiandae nesciunt aut qui omnis, sit aperiam
                        rerum, nobis facilis mollitia cupiditate incidunt harum,
                        numquam laborum deleniti illo dicta. Eligendi vitae
                        nesciunt voluptatibus provident atque.
                    </p>
                    <h1 className="text-xl font-medium mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h1>
                    <p className="text-gray-800 mb-4 text-sm md:text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolor quod, modi hic aperiam commodi deserunt ipsa
                        eligendi velit sequi quidem. Totam, sit eveniet adipisci
                        distinctio repellat incidunt labore quasi similique
                        ratione quisquam illo doloribus vero rerum eius
                        cupiditate dolorum vel quod, minima amet, at aliquam
                        debitis fuga ex! Aspernatur modi unde, doloremque, quis
                        molestias odio dolores, rem dicta rerum eos dolor
                        quibusdam. Omnis distinctio, provident eveniet debitis
                        consectetur dicta. Natus ab fugit quidem dolorem ipsa
                        saepe consequatur consectetur magni dolore. Iure aut
                        maiores culpa id nisi, in similique quae vero quaerat
                        soluta dolore at nobis iusto esse natus ullam nam
                        impedit? Quisquam doloremque doloribus at! Modi corporis
                        voluptatum deserunt architecto.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
