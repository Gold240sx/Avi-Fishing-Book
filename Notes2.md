# Parrallax Slide
<ParrallaxSlide>
id: #P
map: # (No distinct map differentation)
styles: .Slide.Parrallax
controls: N/A
options: {vertical/Horizontal, fit, fill-scroll}
Usage: <ParrallaxSlide options={options}>...</ParrallaxSlide>
# Rules:
    - CAN be inside of a vetical Slide
    - CAN follow a dissolve slide
heritage: Same as input Slide (GrandParent)
mapConditional: Similar to slide, Just if it has a class of .parrallax, add "p"

# Dissolve Slide
<DissolveSlide>
ui: (Dissolve Slide dissolves over next rendered Slide)
id: #D
map: # (Treated as a layer above the following layer )
styles: .Dissolve
controls: (Down)
options: N/A
Usage: 
<DissolveSlideGroup> // .Dissolve-Group, #1
    <DissolveSlide>// .Dissolve
        ...
    </DissolveSlide>
    <Slide> // .Dissolve-Slide
        ...
    </Slide>
</DissolveSlideGroup>
# Rules:
    - CANNOT follow or preceed another dissolve slide
    - MUST be contained in a DissolveGroup
heritage: Same as input Slide (GreatGrandParent)
mapConditional: 


