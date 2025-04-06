import React, { useState } from "react";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";

export default function ContactMessage() {
    const [showReply, setShowReply] = useState(false);

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] lg:h-full mx-2 md:mx-4 my-6"
        >
            <div className="flex items-center gap-1">
                <p className="text-gray-800">Message from</p>
                <h1 className="font-medium">Khant Yadanar Moe</h1>
            </div>
            <div className="mt-4 bg-white border-l-2 border-l-accentRed px-3 py-4 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="font-medium">Khant Yadanar Moe</h1>
                    <p className="text-sm md:text-base text-gray-800">
                        23 minutes ago
                    </p>
                </div>
                <div className="text-gray-800 text-sm flex items-center gap-1 mt-1">
                    <p>khantyadanarmoe283@gmail.com</p>
                    <p className="hidden md:block"> | (327) 278 238</p>
                </div>
                <hr className="my-3 border-l-gray-400" />
                <p className="text-sm md:text-base text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium culpa sint dignissimos quia tenetur atque
                    perspiciatis minus voluptatem at eos, ducimus eius optio
                    delectus non velit unde. Quod vero error, nesciunt maiores
                    ea iste dolor harum odio et explicabo in amet quas,
                    cupiditate ut esse ratione. Quas magni, dolorem eius
                    distinctio perferendis fugiat, dolore totam repellat
                    voluptatem molestiae ex, soluta obcaecati! Id sapiente,
                    iusto vero odit accusamus non dolores eos doloribus nesciunt
                    optio eum animi, aut deserunt, placeat vitae quasi. Eligendi
                    quaerat optio atque odit a earum nam, quis officiis est
                    labore cum, consequuntur neque sed facilis obcaecati
                    voluptatum hic quisquam repellat ipsam impedit dolores
                    perferendis architecto magni minima. Minima atque sed
                    explicabo sunt vero enim totam, eligendi mollitia dolor! Ea
                    aspernatur beatae eligendi architecto ullam cupiditate quasi
                    mollitia voluptate omnis eius. Aspernatur voluptates iusto
                    odit sed consequuntur ea ad et natus animi est officia ab
                    eum, neque aperiam commodi illo esse dolorum numquam minus,
                    soluta ullam. Atque adipisci consequuntur, est odit
                    consectetur ut officia, nostrum reprehenderit iusto dolorem
                    harum. Voluptatem veritatis repellat, ullam velit esse rerum
                    voluptatum commodi amet?
                </p>
                <div className="flex gap-1 items-center justify-end mt-6">
                    <Button
                        className="bg-accentGreen text-white"
                        onClick={() => setShowReply(!showReply)}
                    >
                        Reply
                    </Button>
                    <Button className="bg-accentYellow text-black">Mark</Button>
                </div>
            </div>
            {showReply && (
                <div className="mt-4 bg-white border-l-2 border-l-accentRed px-3 md:px-4 py-4 md:py-8 rounded-md shadow-md">
                    <Textarea
                        placeholder="Type your reply here..."
                        className="w-full"
                    />
                    <div className="flex justify-end mt-3">
                        <Button className="mt-2 bg-accentGreen text-white">
                            Send
                        </Button>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
