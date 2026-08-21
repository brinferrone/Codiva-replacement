//make song ojects 
class Song 
{
  private static int songCount;
  private String title;
  private String artist;
  private String genre;
  private double rating;
  private int lengthInSeconds;
  private String songUrl;
  //constructor
  public Song(String t, String a, String g, double r, int length, String url)
   {
     this.title = t;
     this.artist = a;
     this.genre = g;
     this.rating = r;
     this.lengthInSeconds = length;
     this.songUrl = url;
    songCount++;
   }
  //accessors
  public String getTitle()
  {
    return title;
  }
    
  public String getArtist()
  {
    return artist;
  }
    
  public String getGenre()
  {
    return genre;
  }
  
  public String getURL()
  {
    return songUrl;
  }
  
  public double getRating()
  {
    return rating;
  }
  
  public int getLength()
  {
    return lengthInSeconds;
  }
  
  public static int getSongCount()
  {
    return songCount;
  }

  
  //mutator
  public void setRating(double r)
  {
    rating = r;
  }
  
  public void setLength(int s)
  {
    lengthInSeconds = s;
  }
  
  public void likeSong()
  {
    rating++;
    if(rating>10)
    {
      rating = 10;
    }
    else
    this.rating = rating;
  }
  
  //toString
  public String toString() 
  {
    return  title + " by " + artist + " \n Genre: " + genre + " \n Rating: " + rating + "/10" + " \n Length: " + lengthInSeconds + " seconds";
  }
  
}
