function changeImageView(p1)
{
    let imgTag = document.querySelector('#imgid');

    if(p1 == 1)
    {
        imgTag.setAttribute("src","gfront.jpeg");
    }
    else if(p1 == 2)
    {
        imgTag.setAttribute("src","gback.jpeg");
    }
    else if(p1 == 3)
    {
        imgTag.setAttribute("src","g.jpeg");
    }
}
