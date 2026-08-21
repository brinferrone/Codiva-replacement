public class SongRunner
{
    public static void main(String[] args)
    {
        // Create at least three Song objects
Song song1 = new Song("Fever", "Buckshot and Fakemink", "rap", 9, 145, "https://www.youtube.com/watch?v=mqEZcXdtAUA");
Song song2 = new Song("Feel It", "D4vd", "pop", 8.5, 157, "https://www.youtube.com/watch?v=N4lQtxmOwSg");
Song song3 = new Song("No Lie", "Sean Paul and Dua Lipa", "pop", 8.5, 221, "https://www.youtube.com/watch?v=GzU8KqOY8YA");
      
        // Print each Song object
        System.out.println(song1);
        System.out.println(song2);
        System.out.println(song3);
        System.out.println(" ");//use for line break / Space

        //song array
        Song[] Playlist = new Song[5];

        Playlist[0] = song1;
        Playlist[1] = song2;
        Playlist[2] = song3;
        Playlist[3] = song1;
        Playlist[4] = song2;

       // Test both mutator methods

      song1.setRating(9.1);
      song1.setLength(148);
        // Test at least two accessor methods
     System.out.println(song1.getTitle());
      System.out.println(song1.getLength());
      
      

        // Print an object again to show that it changed
      song1.likeSong();
      System.out.println(song1);
      System.out.println("Songs created: " + Song.getSongCount());

      //call to songPlaylist method
      songPlaylist(Playlist);
    }
    //Tranverse the array and print each song object
     public static void songPlaylist(Song[] s)
    {
        for(int i = 0; i < s.length; i++)
        {
            System.out.println(s[i]);
        }
    }

}
