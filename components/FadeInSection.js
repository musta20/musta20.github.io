
import  { useEffect,useState, useRef } from "react";
export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
  
    
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(`entry`, entry, `is = ${entry.isIntersecting}`);
          setVisible(entry.isIntersecting);
        });
      });
  
      const { current } = domRef;
      observer.observe(current);
  
      return () => observer.unobserve(current);
    }, []);
    return (
      <div
        className={`transition-opacity ease-in duration-700  ${isVisible ? "opacity-100" : "opacity-0"}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  