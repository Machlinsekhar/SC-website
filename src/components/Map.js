import React from 'react';

const Map = () => {
  return (
    <div className="h-48 lg:h-64 w-full overflow-hidden"> {/* Add overflow-hidden class */}
      <iframe
    title="Google Map"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
        srcDoc='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7217654782658!2d72.98914407520539!3d19.075966982128545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cb1f0b0f03%3A0x37fa29a744ae41a4!2sCentre%20for%20Incubation%20and%20Business%20Acceleration%20CIBA%20Mumbai!5e0!3m2!1sen!2sin!4v1693238587766!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
