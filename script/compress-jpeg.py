from PIL import Image
import argparse
import glob
import json
import os

thumnail_max_size = 1000
thumnail_quality = 50

if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.add_argument("input_dir")
  parser.add_argument("output_dir")
  parser.add_argument("json_path")
  args = parser.parse_args()
  paths = glob.glob(args.input_dir + "*.jpg") + glob.glob(args.input_dir + "*.jpeg")

  os.makedirs(args.output_dir, exist_ok=True)
  os.makedirs(args.output_dir + "thumbnail", exist_ok=True)
  photos = []

  for path in paths:
    print("processing:" + path)
    img = Image.open(path)
    basename = os.path.splitext(os.path.basename(path))[0]
    filename = basename + ".webp"
    img.save(f"{args.output_dir}{filename}", quality=100)

    # create a thumbnail
    ratio = min(thumnail_max_size / max(img.width, img.height), 1.0)
    width, height = round(img.width * ratio), round(img.height * ratio)
    thumbnail = img.resize((width, height))
    thumbnail.save(f"{args.output_dir}thumbnail/{filename}", quality=thumnail_quality)    

    photos.append({
      "src": filename,
      "title": "",
      "place": "",
      "date": "",
      "width": width,
      "height": height
    })

  data = {
      "title": "",      
      "date": "",
      "dir": "/" + args.output_dir,
      "photos": photos
  }
  with open(args.json_path, "w") as fp:
    json.dump(data, fp, indent=2)
