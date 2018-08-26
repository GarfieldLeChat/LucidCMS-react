import React, { Component } from "react";
 
class Accordion extends Component {
  render() {
    return (
        <div>
            <h2>Accordion</h2>

            <h5>Basic Accordion</h5>
                <div class="accordion">
                    <div class="accordion-section">
                        <a class="accordion-section-title default" href="#accordion-1">Accordion Section #1</a>
                        
                        <div id="accordion-1" class="accordion-section-content">
                            <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                        </div>
                        {/*--end .accordion-section-content--*/}

                    </div>
                    {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title default" href="#accordion-2">Accordion Section #2</a>
                    
                    <div id="accordion-2" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title default" href="#accordion-3">Accordion Section #3</a>
                    
                    <div id="accordion-3" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

            </div>
            {/*--end .accordion--*/}

                <h5>Selected Accordion</h5>
                <div class="accordion">
                <div class="accordion-section">
                    <a class="accordion-section-title default" href="#accordion-4">Accordion Section #1</a>
                    
                    <div id="accordion-4" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title  default active" href="#accordion-5">Accordion Section #2</a>
                    
                    <div id="accordion-5" class="accordion-section-content open">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title default" href="#accordion-6">Accordion Section #3</a>
                    
                    <div id="accordion-6" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

            </div>
            {/*--end .accordion--*/}

            <h5>On Mouseover Accordion</h5>
                <div class="accordion">
                <div class="accordion-section">
                    <a class="accordion-section-title over" href="#accordion-7">Accordion Section #1</a>
                    
                    <div id="accordion-7" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title over" href="#accordion-8">Accordion Section #2</a>
                    
                    <div id="accordion-8" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

                <div class="accordion-section">
                    <a class="accordion-section-title over" href="#accordion-9">Accordion Section #3</a>
                    
                    <div id="accordion-9" class="accordion-section-content">
                        <p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nulla mi, rutrum ut feugiat at, vestibulum ut neque? Cras tincidunt enim vel aliquet facilisis. Duis congue ullamcorper vehicula. Proin nunc lacus, semper sit amet elit sit amet, aliquet pulvinar erat. Nunc pretium quis sapien eu rhoncus. Suspendisse ornare gravida mi, et placerat tellus tempor vitae.</p>
                    </div>
                    {/*--end .accordion-section-content--*/}

                </div>
                {/*--end .accordion-section--*/}

            </div>
            {/*--end .accordion--*/}

        </div>
    );
  }
}
 
export default Accordion;