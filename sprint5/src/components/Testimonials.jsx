import React from "react";
import "./testimonials.css";
import testimonials from "./testimonials.json";

function Testimonial({ name, title, quote, image }, index) {
    return (
        <div className="testimonial"> 
            <p>{quote}</p>
            <div className="testimonial-header">
                <img className="testimonial-image" src={image} alt={name} />
                <div>
                    <strong><p>{name}</p></strong>
                    <strong><p>{title}</p></strong>
                </div>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="testimonials">
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} index={index} />
            ))}
        </div>
    );
}

export default Testimonials;