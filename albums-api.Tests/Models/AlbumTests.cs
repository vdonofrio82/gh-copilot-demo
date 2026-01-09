using albums_api.Models;

namespace albums_api.Tests.Models
{
    public class AlbumTests
    {
        [Fact]
        public void GetAll_ReturnsListOfAlbums()
        {
            // Act
            var albums = Album.GetAll();

            // Assert
            Assert.NotNull(albums);
            Assert.NotEmpty(albums);
        }

        [Fact]
        public void GetAll_ReturnsSixAlbums()
        {
            // Act
            var albums = Album.GetAll();

            // Assert
            Assert.Equal(6, albums.Count);
        }

        [Fact]
        public void GetAll_AllAlbumsHaveValidProperties()
        {
            // Act
            var albums = Album.GetAll();

            // Assert
            foreach (var album in albums)
            {
                Assert.True(album.Id > 0);
                Assert.False(string.IsNullOrEmpty(album.Title));
                Assert.False(string.IsNullOrEmpty(album.Artist));
                Assert.True(album.Price > 0);
                Assert.False(string.IsNullOrEmpty(album.Image_url));
            }
        }

        [Fact]
        public void Album_RecordPropertiesAreCorrect()
        {
            // Arrange
            int id = 1;
            string title = "Test Album";
            string artist = "Test Artist";
            double price = 9.99;
            string imageUrl = "https://example.com/image.jpg";

            // Act
            var album = new Album(id, title, artist, price, imageUrl);

            // Assert
            Assert.Equal(id, album.Id);
            Assert.Equal(title, album.Title);
            Assert.Equal(artist, album.Artist);
            Assert.Equal(price, album.Price);
            Assert.Equal(imageUrl, album.Image_url);
        }

        [Fact]
        public void GetAll_FirstAlbumHasExpectedProperties()
        {
            // Act
            var albums = Album.GetAll();
            var firstAlbum = albums.First();

            // Assert
            Assert.Equal(1, firstAlbum.Id);
            Assert.Equal("You, Me and an App Id", firstAlbum.Title);
            Assert.Equal("Daprize", firstAlbum.Artist);
            Assert.Equal(10.99, firstAlbum.Price);
            Assert.Equal("https://aka.ms/albums-daprlogo", firstAlbum.Image_url);
        }
    }
}
