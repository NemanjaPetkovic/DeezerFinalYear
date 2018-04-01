from main import app
import unittest

class FlaskTestCase(unittest.TestCase):

	#Checks if login page loads correctly
	def test_login_page(self):
		unit = app.test_client(self)
		callback = unit.get('/', content_type='html/text')
		self.assertEqual(callback.status_code, 200)

	#Checks if home page loads correctly
	def test_main_page(self):
		unit = app.test_client(self)
		callback = unit.get('/main', content_type='html/text')
		self.assertEqual(callback.status_code, 200)

	#Checks if user recommendations page loads correctly
	def test_recommendations_page(self):
		unit = app.test_client(self)
		callback = unit.get('/user', content_type='html/text')
		self.assertEqual(callback.status_code,200)

	#Checks if music data page loads correctly
	def test_chart_page(self):
		unit = app.test_client(self)
		callback = unit.get('/charts', content_type='html/text')
		self.assertEqual(callback.status_code,200)

	#Checks if invalid url is entered, returns error 404
	def test_invalid_url(self):
		unit = app.test_client(self)
		callback = unit.get('/charts123', content_type='html/text')
		self.assertEqual(callback.status_code, 404)

	#Checks if an element exists in the music data page
	def testHtml(self):
		unit = app.test_client(self)
		callback = unit.get('/charts', content_type='html/text')
		self.assertTrue(b'Login' in callback.data)

	def testHtml2(self):
		unit = app.test_client(self)
		callback = unit.get('/charts', content_type='html/text')
		self.assertFalse(b'Top tracks' in callback.data)


if __name__ == '__main__':
	unittest.main()