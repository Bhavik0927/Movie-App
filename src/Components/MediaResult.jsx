
const MediaResult = ({ searchData }) => {

    const mediaCount = {};

    searchData?.forEach(item => {
        // Check if the media_type already exists in the mediaTypeCount object
        if (mediaCount[item.media_type]) {
            // If it exists, increment the count
            mediaCount[item.media_type]++;
        } else {
            // If it doesn't exist, initialize the count to 1
            mediaCount[item.media_type] = 1;
        }
    })
    console.log(mediaCount);

    return (
        <>
            <div className="left_heading">
                <h3>Search Results</h3>
            </div>

            <ul className="media_types">
                <li>TV Shows <span>{mediaCount.tv || 0  }</span></li>
                <li>Movies <span>{mediaCount.movie || 0}</span> </li>
                <li>People <span>{mediaCount.person || 0}</span> </li>
                <li>Keywords <span>0</span> </li>
                <li>Companies <span>0</span> </li>
                <li>Collection <span>0</span> </li>
                <li>Networks <span>0</span> </li>
            </ul>
        </>
    )
}

export default MediaResult