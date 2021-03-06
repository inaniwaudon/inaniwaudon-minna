from PIL import Image
import argparse
import glob
import json
import os

full_max_size = 2500
full_quality = 65

thumbnail_max_size = 1000
thumbnail_quality = 50

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

  for i, path in enumerate(paths):
    print(f"processing: {path} ({i}/{len(paths)})")
    img = Image.open(path)
    full_ratio = min(full_max_size / max(img.width, img.height), 1.0)
    full_width, full_height = round(img.width * full_ratio), round(img.height * full_ratio)
    thumbnail = img.resize((full_width, full_height))

    basename = os.path.splitext(os.path.basename(path))[0]
    filename = basename + ".webp"
    img.save(f"{args.output_dir}{filename}", quality=full_quality)

    # create a thumbnail
    ratio = min(thumbnail_max_size / max(img.width, img.height), 1.0)
    thumbnail_width, thumbnail_height = round(img.width * ratio), round(img.height * ratio)
    thumbnail = img.resize((thumbnail_width, thumbnail_height))
    thumbnail.save(f"{args.output_dir}thumbnail/{filename}", quality=thumbnail_quality)    

    photos.append({
      "src": filename,
      "title": "",
      "place": "",
      "date": "",
      "width": full_width,
      "height": full_height
    })

  data = {
      "title": "",      
      "date": "",
      "dir": "/" + args.output_dir,
      "photos": sorted(photos, key=lambda x: x["src"])
  }
  with open(args.json_path, "w") as fp:
    json.dump(data, fp, indent=2)
